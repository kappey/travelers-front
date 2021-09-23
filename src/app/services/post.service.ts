import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from '../models/post.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private env = environment;

  constructor(private http:HttpClient) { }

  public getAllPosts(traveler_id:string):Observable<Post[]>{
    let data = this.http.get<Post[]>(this.env.postsUrl+"/"+traveler_id)
    .pipe(catchError(this.handleError)); 
    return(data);
  }

  // public getOnePost(post_id:string):Observable<Post>{
  //   let data = this.http.get<Post>(this.env.postsUrl+"/"+post_id)
  //   .pipe(catchError(this.handleError));
  //   return (data);
  // }

  public editOnePost(post_id:string, body:{}):Observable<Post>{
    let userUrl = this.env.postsUrl+"/"+post_id;
    let data= this.http.put<Post>(userUrl,body)
    .pipe(catchError(this.handleError));
    return(data); 
  }

  public deletePost(post_id:string, body:{}):Observable<Post>{
    let userUrl = this.env.postsUrl+"/"+post_id;
    let data= this.http.delete<Post>(userUrl,body)
    .pipe(catchError(this.handleError));
    return(data); 
  }

  handleError(error:any){
    return throwError(error.message || "Server Error")
  }

}
