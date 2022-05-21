import MovieDataBaseRepository from "../repositories/MovieDataBaseRepository";
import {ConfigurationDto} from "../models/ExternalDtos/ConfigurationDto";
import {instance, mock, when} from "ts-mockito";
import moviesService from "./movies.service";

const assert = require('assert')

describe('Get Movies Info', () => {
    const configurationDto: ConfigurationDto = {
        images: {
            base_url: 'testBaseUrl',
            secure_base_url: 'testSecureUrl',
            backdrop_sizes: [],
            logo_sizes: ['size1', 'size2', 'size3'],
            poster_sizes: [],
            profile_sizes: [],
            still_sizes: []
        },
        change_keys: []
    }
    beforeEach(() => {
    })
    describe('getBaseImageUrl', () => {
        it('Should concatenate base url and size', () => {
            let mockedRepo: typeof MovieDataBaseRepository= mock(MovieDataBaseRepository);
            when(mockedRepo.getConfiguration()).thenReturn(Promise.resolve(configurationDto));
            // need to finish figuring out how to mock an instance of a class using mocha/tsmockito
            // or if I need a different library

            moviesService.getMoviesInfo('marvel');

            // need an expect statement that looks for a callback of the
            // parameter passed into mapToMovieSearchOutputArray
        })

        // Other unit tests:
        // Testing that arrays of length less than 10 don't break the for loop in mapToMovieSearchOutputArray
        // Testing that the correct properties get set in mapToMovieSearchOutputArray
        // Testing that the result of mapToMovieSearchOutputArray is an array of length 10 (since this was a requirement)
        // Could also try to test movies.ts and the responses caused by different errors.
    })
})