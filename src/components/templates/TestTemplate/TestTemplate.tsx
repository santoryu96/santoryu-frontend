import { useGetLogs } from '../../../queries/test';
import { useEffect} from "react";

export default function TestTemplate (){

    const getLogsResult = useGetLogs();
    console.log('getLogsResult', getLogsResult)
    const getLogsResultData = getLogsResult.data;
    return(
        <div>
            Hello World, TestTemplate
            <div>
                {getLogsResultData}
            </div>
        </div>
    )
}