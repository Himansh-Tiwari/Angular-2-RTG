import {Component} from '@angular/core';
import {hsnService} from '../Service/apiHsn';
import {Hsn} from '../Model/Hsn';

@Component({
    selector: 'app-about',
    template: `
    <h1>{{welcome}}</h1>
     <table>
      <tr>
            <th>Id</th>
            <th>Code</th>
            <th>Header1</th>
            <th>Header2</th>
            <th>Header3</th>
            <th>Header4</th>
      </tr>
      <tr *ngFor="let item of data">
           <td> {{item.Id}}</td>
           <td>{{item.Code}}</td>
           <td>{{item.Header1}}</td>
           <td>{{item.Header2}}</td>
           <td>{{item.Header3}}</td>
           <td>{{item.Header4}}</td>
           <td>{{item.Phone}}</td>
           <td>{{item.getHeader()}}</td>
      </tr>
    </table>
    `
})

export class HsnComponent{
    debugger;
    data: Hsn[];
    api: hsnService;
    constructor(){
        debugger;
        var app=new hsnService();
        app.GetAll().then((response) => { 
                this.data = response;
                console.log(this.data);
         });
    };
};