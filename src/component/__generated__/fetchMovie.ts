/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchMovie
// ====================================================

export interface fetchMovie_film {
  __typename: "Film";
  /**
   * The title of this film.
   */
  title: string | null;
  /**
   * The episode number of this film.
   */
  episodeID: number | null;
  /**
   * The opening paragraphs at the beginning of this film.
   */
  openingCrawl: string | null;
  /**
   * The name of the director of this film.
   */
  director: string | null;
  /**
   * The ISO 8601 date format of film release at original creator country.
   */
  releaseDate: string | null;
}

export interface fetchMovie {
  film: fetchMovie_film | null;
}

export interface fetchMovieVariables {
  movieId: string;
}
