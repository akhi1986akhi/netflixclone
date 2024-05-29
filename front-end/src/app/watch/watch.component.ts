import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  isLoggedIn: boolean = false;
  color: string = '';
  url = ""
  watchId:any;
  movies = [
    {
      id: 1,
      title: "Animal",
      year: "2023",
      duration: "142 mins",
      rating: "4.5",
      genere: 'movie',
      director: "Sandeep Reddy Vanga",
      desc: "Animal is a 2023 Hindi-language action, crime, and drama film. It is about a man named Vijay Singh who returns home after years abroad and seeks revenge for his father's attack."
      ,
    },
    {
      id: 2,
      title: "GADAR 2",
      year: "2023",
      duration: "142 mins",
      rating: "4.1",
      genere: 'movie',
      director: "Anil Sharma",
      desc: "Storyline :Gadar II brings back India's most loved family of Tara, Sakeena and Jeete; 22 years after its predecessor. Set against the backdrop of Indo-Pakistan war of 1971, Tara Singh, once again, will face every enemy to protect the honor of country and family.",
    },
    {
      id: 3,
      title: "PATHAAN",
      year: "2023",
      duration: "142 mins",
      rating: "3.8",
      genere: 'movie',
      director: "Siddharth AnandS",
      desc: "Pathaan, an exiled RAW agent, works with ISI agent Rubina Mohsin to take down Jim, a former RAW agent, who plans to attack India with a deadly virus. Principal photography commenced in November 2020 in Mumbai.",
    },
    {
      id: 4,
      title: "AVTAR",
      year: "2022",
      duration: "142 mins",
      rating: "3.6",
      genere: 'movie',
      director: "James Cameron",
      desc: "Avatar is a 2009 movie about a paraplegic US Marine named Jake Sully (Sam Worthington) who becomes part of a program to explore the alien planet Pandora. The movie takes place in 2154, when Earth is running out of natural resources.",
    },
    {
      id: 5,
      title: "JAWAN",
      year: "2023",
      duration: "142 mins",
      rating: "4.0",
      genere: 'movie',
      director: "Atlee Kumar",
      desc: "A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion. A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion.",
    },
    {
      id: 6,
      title: "GARUDA",
      year: "2023",
      duration: "142 mins",
      rating: "3.9",
      genere: 'movie',
      director: "Arun Varma",
      desc: "A college student named Theresa Philip is sexually assaulted, and DCP Harish Madhav is assigned to investigate the case. Salam Kyperi sees the culprit and gives information about him to the police.",
    },
    {
      id: 7,
      title: "3 IDIOTS",
      year: "2009",
      duration: "142 mins",
      rating: "5.0",
      genere: 'movie',
      director: "Rajkumar Hirani ",
      desc: "Narrated through two parallel dramas, one in the present and the other set ten years in the past, the story follows the friendship of three students at an Indian engineering college and is a satire about the social pressures under the Indian education system. ",
    },
    {
      id: 8,
      title: "12th FAIL",
      year: "4.2",
      duration: "142 mins",
      rating: "2023",
      genere: 'movie',
      director: "Vidhu Vinod Chopra",
      desc: "t is based on the 2019 non-fiction book Twelfth Fail by Anurag Pathak. The film is about the real-life story of Manoj Kumar Sharma, an IPS officer who overcame poverty to become an officer in the Indian Police Service",
    }
  ]
  constructor(private _router: Router, private _actroute: ActivatedRoute) { }
  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');

    let id = this._actroute.snapshot.queryParamMap.get('id');
    this.watchId =id;

    if (id) {
      this.url = `http://localhost:3000/v2/api/video/${id}`
    }
  }
  changeColors(backgroundColor: string) {

    this.color = backgroundColor;
  }
  watch(event: any) {
    this.watchId=event;
    this._router.navigate(['watch'], { queryParams: { id: event } })
    .then(() => {
      window.location.reload();
    })
  }
}
