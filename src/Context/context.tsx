import React, { useState, createContext, useEffect, useRef, useMemo } from 'react';
import debounce from 'lodash/debounce';
import { character, commonContext } from '../types';
import characterService from '../Services/characterService';

const context = {} as commonContext;

export const CommonContext = createContext(context);

export const CommonContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchText, setSearchText] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [{ currentPage, totalPages }, setPageInfo] = useState({
    totalPages: 1,
    currentPage: 1,
  });
  let _: character[] = [];
  const [characters, setCraracters] = useState(_);

  const debounceRef = useRef(0);

  const onSearchText = useMemo(
    () =>
      debounce(value => {
        debounceRef.current += 1;
        const LocalRef = debounceRef.current;
        setTimeout(() => {
          if (LocalRef === debounceRef.current) {
            searchCharacters({
              searchText: value,
              status,
              gender,
              page: currentPage,
            });
          }
        }, 1);
      }, 300),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const searchCharacters = ({ searchText = '', status = '', gender = '', page = 1 }) => {
    setLoading(true);
    characterService
      .getCharacters({
        searchText,
        status,
        gender,
        page,
      })
      .then((res: { totalItems: number; totalPages: number; characters: character[] }) => {
        setCraracters(res.characters);
        setLoading(false);
        setPageInfo({
          totalPages: res.totalPages,
          currentPage: page,
        });
      })
      .catch(ex => {
        setLoading(false);
        alert(ex.message);
      });
  };

  useEffect(() => {
    onSearchText(searchText);
  }, [onSearchText, searchText]);

  const toggleFav = (id: string) => {
    const Fav = localStorage.getItem('favorite');
    if (Fav) {
      const FavArray = JSON.parse(Fav);
      if (FavArray.includes(id)) {
        FavArray.splice(FavArray.indexOf(id), 1);
      } else {
        FavArray.push(id);
      }
      localStorage.setItem('favorite', JSON.stringify(FavArray));
    } else {
      localStorage.setItem('favorite', JSON.stringify([id]));
    }
    setRefresh(!refresh);
  };

  const isFav = (id: string) => {
    const Fav = localStorage.getItem('favorite');
    if (Fav) {
      const FavArray = JSON.parse(Fav);
      return FavArray.includes(id);
    }
    return false;
  };

  const onGenderChange = (gender: string) => {
    setGender(gender);
    searchCharacters({
      searchText,
      status,
      gender,
      page: currentPage,
    });
  };

  const onStatusChange = (status: string) => {
    setStatus(status);
    searchCharacters({
      searchText,
      status,
      gender,
      page: currentPage,
    });
  };

  const onPageChange = (currentPage: number) => {
    setPageInfo(_ => ({ ..._, currentPage }));
    searchCharacters({
      searchText,
      status,
      gender,
      page: currentPage,
    });
  };

  return (
    <CommonContext.Provider
      value={{
        onSearchText: (searchText: string) => setSearchText(searchText),
        onGenderChange,
        onStatusChange,
        onPageChange,
        toggleFav,
        isFav,
        searchText,
        gender,
        status,
        currentPage,
        totalPages,
        characters,
        refresh,
        loading,
      }}>
      {children}
    </CommonContext.Provider>
  );
};
