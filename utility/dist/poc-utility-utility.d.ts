import { Subject } from 'rxjs';
export declare function dispatchMyEvent(input: string): void;
export declare const info: Subject<unknown>;
export declare function setSubjectTest(message: string): void;
export declare function getSubjectTest(): Subject<unknown>;
export declare class MyInfo {
    setInformation(information: string): void;
    getInformation(): string;
}
