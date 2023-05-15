// Anything exported from this file is importable by other in-browser modules.
import { Subject } from 'rxjs';

export function dispatchMyEvent(input: string) {
    const myEvent = new CustomEvent("sendData", {
        detail: {
            name: input,
        },
    });

    dispatchEvent(myEvent);
}

export const info = new Subject();

export function setSubjectTest(message: string) {
    info.next(message);
}

export function getSubjectTest() {
    return info;
}

export class MyInfo {
    setInformation(information: string) {
        localStorage.setItem("information", information);
    }

    getInformation(): string {
        return localStorage.getItem("information");
    }
}