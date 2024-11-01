import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/filtersSlice";

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectStatusFilter = (state) => state.filters.name;

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter.toLowerCase())
    );
  }
);
