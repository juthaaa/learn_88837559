import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private code:number;
  private name:string;
  private email:string;
  private edu: { major: string, faculty: string, university:string }
  private skills: string[];

  constructor() { }

  ngOnInit() {
  this.code = 59160164;
  this.name = "Mr.Juthatawat Satakurama";
  this.email = "59160164@go.buu.ac.th";  
  this.edu = { major: "SE", faculty: "Informatics", university: "Burapha University" };
  this.skills = ["HTML", "CSS", "JS", "PHP", "SQL"];
  }

  addSkill(val_skill) {
    console.log(val_skill);
    
    this.skills.push(val_skill);
    return false;
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(skill, 1);
      } 
    });
  }

}


