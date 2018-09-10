import {Component, Input, OnInit} from '@angular/core';
import {Group} from "../models/Group";
import {QueryServiceI} from "../services/QueryServiceI";
import {LuceneService} from "../services/LuceneService";

@Component({
  selector: 'ngx-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css'],
  providers: [
    {provide: QueryServiceI, useClass: LuceneService}
  ]
})
export class QueryBuilderComponent implements OnInit {

  @Input() type: String;
  start: Group;
  query: string;
  @Input() fields: string[];

  constructor(
    private service: QueryServiceI
  ) {

    if (!this.type) {
      this.type = 'lucene';
    }

    console.log("Type selected: " + this.type);
  }

  ngOnInit() {
    this.clear();
  }


  search() {
    this.query = this.service.getQuery(this.start);
  }

  /* hide() {
     this.clear();
   }

 */

  clear() {
    this.start = new Group(null);
    this.start.first = true;
  }

}

/*
angular.module('ng-query-builder', ['ng-query-builder.templates']);

angular.module('ng-query-builder').component('ngQueryBuilder', {
  "bindings": {
    "fields": "<",
    "onSearch": "&",
    "query": "=?",
    "condition": "<?",
    "debugEnabled": "@?debug"
  },

});

angular.module('ng-query-builder').filter('urlEncodeFilter', urlEncodeFilter);

urlEncodeFilter()
{
  return window.encodeURIComponent;
}

angular.module('ng-query-builder').filter('translate', translateFilter);


translateFilter($filter)
{
  return function(stub)
  {
    /*if ($filter('translate')) {
        return $filter('translate')(stub);
    }
    return stub;

  }
}*/
