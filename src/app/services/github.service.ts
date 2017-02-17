import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
        private username: string;
        private client_id = 'c719655fed03fe3107dd';
        private client_secret = 'da1833ca26ef7e95354b910d7c10e0f90553e3a2';

        constructor(private _http: Http){
            console.log('Servicio Github listo...');
            this.username = 'aeam88';
        }

        getUser(){
            return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
        }

        getRepos(){
            return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
        }

        updateUser(username:string){
            if (this.username == '') {
                this.username = 'aeam88';
            } else {
                this.username = username;
            }
        }

}
