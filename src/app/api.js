import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const dbApi = createApi({
  reducerPath: 'dbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: builder => ({
    getEvents: builder.query({
      query: () => 'events'
    }),
    getForeignEvents: builder.query({
        query: () => 'events?country=foreign'
    }),
    getEvents: builder.query({
      query: ({city, params}) => {
        let paramsStr = ''

        for (const param in params) {
          paramsStr += `&${param}=${params[param]}`
        }

        return `events?city=${city}${paramsStr}`
      }
    }),
    getTypes: builder.query({
      query: () => 'types'
    }),
    getCities: builder.query({
      query: () => 'cities'
    })
  })
})

export default dbApi
export const { useGetEventsQuery, useGetCitiesQuery, useGetTypesQuery } = dbApi