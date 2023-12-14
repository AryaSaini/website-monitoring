 export interface IRequest {
    url: string
    config?: any
}

export const urls: IRequest[] = [
    {
        url: 'https://api.github.com/orgs/nodejs/repos'
    },
    {
        url: 'https://api.github.com/users'
    },
    {
        url: 'https://api.github.com/orgs/Netflix/repos'
    },
    {
        url: 'https://api.github.com/orgs/twitter/public_members'
    },
    {
        url: 'https://api.github.com/orgs/twitter/repos'
    },
    {
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=',
        config: {headers: {'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7', 'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'}}
    }
];