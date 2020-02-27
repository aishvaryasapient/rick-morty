export interface Page{
    count: number;
    currentpage:number;
    pages:number;
    perPage:number;
  }

export interface Location{
    name:string;
    url:string;
}
  export interface Character{
    
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin:Location;
        location: Location;
        image: string;
        episode: string[];
        url: string;
        created: string;
      
  }
  export interface SELECTED{
    name:string;
    selected:boolean;
  }
  export interface FILTER{
      name:string;
      items:SELECTED[];
  }