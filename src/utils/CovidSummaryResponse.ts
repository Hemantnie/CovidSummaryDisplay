import { Country } from "./Country";
import { Global } from "./Global";

export interface CovidSummaryResponse{

    ID:String;
    Message:String;
    Global:Array<Global>;
    Countries:Array<Country>
}