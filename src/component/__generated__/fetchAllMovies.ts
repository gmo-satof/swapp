/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchAllMovies
// ====================================================

export interface fetchAllMovies_allFilms_edges_node {
  __typename: "Film";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The title of this film.
   */
  title: string | null;
}

export interface fetchAllMovies_allFilms_edges {
  __typename: "FilmsEdge";
  /**
   * The item at the end of the edge
   */
  node: fetchAllMovies_allFilms_edges_node | null;
}

export interface fetchAllMovies_allFilms {
  __typename: "FilmsConnection";
  /**
   * A list of edges.
   */
  edges: (fetchAllMovies_allFilms_edges | null)[] | null;
}

export interface fetchAllMovies {
  allFilms: fetchAllMovies_allFilms | null;
}
