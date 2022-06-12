import React from 'react';
import { useQuery } from 'react-query';
import instance from 'axios';


export const getLogs = async () => {
    try {
        const response = await instance.get(`${process.env.API_BASE_URL}/test`);
        console.log("SUCCESS", response);
        return response.data;
    } catch (e) {
        console.log('ERROR', e);
    }
};

export const useGetLogs = () => {
    return useQuery(
        ['logs'],
        // getLogs
        () => getLogs(),
    )
};