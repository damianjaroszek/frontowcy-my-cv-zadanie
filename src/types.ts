export interface Experience {
    year: number;
    description: string;
}

export interface CVData {
    personal: CVPersonal,
    details: CVDetails
}

export interface CVDetails {
    experience: Experience[];
    education: string[];
}

export interface CVPersonal {
    photo: string;
    name: string;
    lastName: string;
    position: string;
}


