import ky from "ky";

const APIHOST = "https://tetrio-api-wrapper.vercel.app/api";

export async function fetchProfile(id: string): Promise<RootObject> {
    console.log("fetch profle...");
    return await ky(`${APIHOST}/profile?id=${id}`).json();
}

interface Badge {
    id: string;
    label: string;
    ts?: Date;
}

interface User2 {
    _id: string;
    username: string;
}

interface Time {
    start: number;
    zero: boolean;
    locked: boolean;
    prev: number;
    frameoffset: number;
}

interface Clears {
    singles: number;
    doubles: number;
    triples: number;
    quads: number;
    realtspins: number;
    minitspins: number;
    minitspinsingles: number;
    tspinsingles: number;
    minitspindoubles: number;
    tspindoubles: number;
    tspintriples: number;
    tspinquads: number;
    allclear: number;
}

interface Garbage {
    sent: number;
    received: number;
    attack: number;
    cleared: number;
}

interface Finesse {
    combo: number;
    faults: number;
    perfectpieces: number;
}

interface Endcontext {
    seed: number;
    lines: number;
    level_lines: number;
    level_lines_needed: number;
    inputs: number;
    time: Time;
    score: number;
    zenlevel: number;
    zenprogress: number;
    level: number;
    combo: number;
    currentcombopower?: any;
    topcombo: number;
    btb: number;
    topbtb: number;
    tspins: number;
    piecesplaced: number;
    clears: Clears;
    garbage: Garbage;
    kills: number;
    finesse: Finesse;
    finalTime: number;
    gametype: string;
}

interface Record {
    _id: string;
    stream: string;
    replayid: string;
    user: User2;
    ts: Date;
    endcontext: Endcontext;
}

interface I40l2 {
    record: Record;
    rank?: any;
}

interface User3 {
    _id: string;
    username: string;
}

interface Time2 {
    start: number;
    zero: boolean;
    locked: boolean;
    prev: number;
}

interface Clears2 {
    singles: number;
    doubles: number;
    triples: number;
    quads: number;
    realtspins: number;
    minitspins: number;
    minitspinsingles: number;
    tspinsingles: number;
    minitspindoubles: number;
    tspindoubles: number;
    tspintriples: number;
    tspinquads: number;
    allclear: number;
}

interface Garbage2 {
    sent: number;
    received: number;
    attack: number;
    cleared: number;
}

interface Finesse2 {
    combo: number;
    faults: number;
    perfectpieces: number;
}

interface Endcontext2 {
    seed: number;
    lines: number;
    level_lines: number;
    level_lines_needed: number;
    inputs: number;
    time: Time2;
    score: number;
    level: number;
    combo: number;
    currentcombopower: number;
    topcombo: number;
    btb: number;
    topbtb: number;
    tspins: number;
    piecesplaced: number;
    clears: Clears2;
    garbage: Garbage2;
    kills: number;
    finesse: Finesse2;
    finalTime: number;
    gametype: string;
}

interface Record2 {
    _id: string;
    stream: string;
    replayid: string;
    user: User3;
    ts: Date;
    endcontext: Endcontext2;
}

interface Blitz {
    record: Record2;
    rank?: any;
}

interface Records {
    "40l": I40l2;
    blitz: Blitz;
}

interface League {
    gamesplayed: number;
    gameswon: number;
    rating: number;
    glicko: number;
    rd: number;
    rank: string;
    apm: number;
    pps: number;
    vs: number;
    standing: number;
}

interface User {
    _id: string;
    username: string;
    role: string;
    ts: Date;
    badges: Badge[];
    xp: number;
    gamesplayed: number;
    gameswon: number;
    gametime: number;
    country: string;
    records: Records;
    supporter: boolean;
    verified: boolean;
    league: League;
}

export interface RootObject {
    success: boolean;
    user: User;
}
