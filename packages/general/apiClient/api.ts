/* tslint:disable */
/* eslint-disable */
/**
 * Bright-Memory-API
 * Bright-Memory Backend service documents
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateEntryDTO
 */
export interface CreateEntryDTO {
    /**
     * 
     * @type {string}
     * @memberof CreateEntryDTO
     */
    'url': string;
}
/**
 * 
 * @export
 * @interface Entry
 */
export interface Entry {
    /**
     * for internal management
     * @type {string}
     * @memberof Entry
     */
    '_id': string;
    /**
     * 
     * @type {string}
     * @memberof Entry
     */
    'owner': string;
    /**
     * 
     * @type {string}
     * @memberof Entry
     */
    'url': string;
    /**
     * 
     * @type {string}
     * @memberof Entry
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof Entry
     */
    'note': string;
    /**
     * 
     * @type {string}
     * @memberof Entry
     */
    'ogpImageLink': string;
    /**
     * 
     * @type {boolean}
     * @memberof Entry
     */
    'isFavorite': boolean;
    /**
     * 
     * @type {number}
     * @memberof Entry
     */
    'version': number;
    /**
     * ISO String Date
     * @type {string}
     * @memberof Entry
     */
    'createdAt': string;
    /**
     * ISO String Date
     * @type {string}
     * @memberof Entry
     */
    'updatedAt': string;
}
/**
 * 
 * @export
 * @interface GetProfileResponse
 */
export interface GetProfileResponse {
    /**
     * for internal management
     * @type {string}
     * @memberof GetProfileResponse
     */
    '_id': string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponse
     */
    'screenName': string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponse
     */
    'loginName': string;
    /**
     * 
     * @type {number}
     * @memberof GetProfileResponse
     */
    'version': number;
    /**
     * ISO String Date
     * @type {string}
     * @memberof GetProfileResponse
     */
    'createdAt': string;
    /**
     * ISO String Date
     * @type {string}
     * @memberof GetProfileResponse
     */
    'updatedAt': string;
}
/**
 * 
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    'accessToken': string;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const OrderOperators = {
    Desc: 'desc',
    Asc: 'asc'
} as const;

export type OrderOperators = typeof OrderOperators[keyof typeof OrderOperators];


/**
 * 
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    'pageNumber': number;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    'size': number;
    /**
     * 
     * @type {SortOperators}
     * @memberof Pagination
     */
    'sort'?: SortOperators;
    /**
     * 
     * @type {OrderOperators}
     * @memberof Pagination
     */
    'order'?: OrderOperators;
}


/**
 * 
 * @export
 * @interface SearchEntryDTO
 */
export interface SearchEntryDTO {
    /**
     * 
     * @type {string}
     * @memberof SearchEntryDTO
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchEntryDTO
     */
    'note'?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchEntryDTO
     */
    'url'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SearchEntryDTO
     */
    'isFavorite'?: boolean;
    /**
     * 
     * @type {Pagination}
     * @memberof SearchEntryDTO
     */
    'pagination'?: Pagination;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const SortOperators = {
    CreatedAt: 'createdAt',
    UpdatedAt: 'updatedAt'
} as const;

export type SortOperators = typeof SortOperators[keyof typeof SortOperators];



/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} username 
         * @param {string} password 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (username: string, password: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('login', 'username', username)
            // verify required parameter 'password' is not null or undefined
            assertParamExists('login', 'password', password)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (username !== undefined) {
                localVarQueryParameter['username'] = username;
            }

            if (password !== undefined) {
                localVarQueryParameter['password'] = password;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profile: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/profile`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} username 
         * @param {string} password 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(username: string, password: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(username, password, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profile(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetProfileResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.profile(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @param {string} username 
         * @param {string} password 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(username: string, password: string, options?: any): AxiosPromise<LoginResponse> {
            return localVarFp.login(username, password, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profile(options?: any): AxiosPromise<GetProfileResponse> {
            return localVarFp.profile(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @param {string} username 
     * @param {string} password 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public login(username: string, password: string, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).login(username, password, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public profile(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).profile(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * EntryApi - axios parameter creator
 * @export
 */
export const EntryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateEntryDTO} createEntryDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEntry: async (createEntryDTO: CreateEntryDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createEntryDTO' is not null or undefined
            assertParamExists('createEntry', 'createEntryDTO', createEntryDTO)
            const localVarPath = `/entry/new`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createEntryDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} entryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        find: async (entryId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entryId' is not null or undefined
            assertParamExists('find', 'entryId', entryId)
            const localVarPath = `/entry/{entryId}`
                .replace(`{${"entryId"}}`, encodeURIComponent(String(entryId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {SearchEntryDTO} searchEntryDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        search: async (searchEntryDTO: SearchEntryDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'searchEntryDTO' is not null or undefined
            assertParamExists('search', 'searchEntryDTO', searchEntryDTO)
            const localVarPath = `/entry/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(searchEntryDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EntryApi - functional programming interface
 * @export
 */
export const EntryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EntryApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateEntryDTO} createEntryDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEntry(createEntryDTO: CreateEntryDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createEntry(createEntryDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} entryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async find(entryId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.find(entryId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {SearchEntryDTO} searchEntryDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async search(searchEntryDTO: SearchEntryDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Entry>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.search(searchEntryDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EntryApi - factory interface
 * @export
 */
export const EntryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EntryApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateEntryDTO} createEntryDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEntry(createEntryDTO: CreateEntryDTO, options?: any): AxiosPromise<void> {
            return localVarFp.createEntry(createEntryDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} entryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        find(entryId: string, options?: any): AxiosPromise<void> {
            return localVarFp.find(entryId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SearchEntryDTO} searchEntryDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        search(searchEntryDTO: SearchEntryDTO, options?: any): AxiosPromise<Array<Entry>> {
            return localVarFp.search(searchEntryDTO, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EntryApi - object-oriented interface
 * @export
 * @class EntryApi
 * @extends {BaseAPI}
 */
export class EntryApi extends BaseAPI {
    /**
     * 
     * @param {CreateEntryDTO} createEntryDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EntryApi
     */
    public createEntry(createEntryDTO: CreateEntryDTO, options?: AxiosRequestConfig) {
        return EntryApiFp(this.configuration).createEntry(createEntryDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} entryId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EntryApi
     */
    public find(entryId: string, options?: AxiosRequestConfig) {
        return EntryApiFp(this.configuration).find(entryId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SearchEntryDTO} searchEntryDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EntryApi
     */
    public search(searchEntryDTO: SearchEntryDTO, options?: AxiosRequestConfig) {
        return EntryApiFp(this.configuration).search(searchEntryDTO, options).then((request) => request(this.axios, this.basePath));
    }
}


