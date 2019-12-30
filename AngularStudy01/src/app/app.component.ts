import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularStudy01';

  public name : string = 'Joshua';

  public title2 : string = 'study';

  public num : number  = 10;

  public todo : any = new Array({
    title: '요가수련',
    completed: false,
    createdAt: Date.now()
  });

  // public todo : any = new Array('요가수련',  Date.now);

  public all : any = new Array();

  public printAll(arg) {
    console.log(arg);
  }

  private print(arg) {
    console.log(arg);
  }

  constructor() {

    // console.log('Working');

    // var number = 1;
    // console.log('number -> ', number);
    // console.log(number * 10);

    // var trueFalse = true;
    // console.log(trueFalse);

    // var num : number = 1;
    // console.log(num);

    // var text : string = 'text';
    // console.log(text);

    // var all : any = 'abcd';
    // all = 1;
    // console.log(all);

    // var text : string = 'Hello World';
    // console.log(text);

    // var num : number = 1234;
    // console.log(num);

    // var bool : boolean = false;
    // console.log(bool);

    // var method = (arg?) : void => {console.log(arg);}
    // // void로 선언 파라미터의 arg뒤에 있는 ?(물음표)는 옵셔널로서 있어도 되고 없어도 된다.
    // // 당연히 var method : void는 불가능하다 즉 함수에서 리턴값이 없을 때 붙인다.
    // method('print');

    // var data : any = null;
    // console.log(data);

    // method();

    // var method2 = function(arg){console.log(arg);}
    // method2('shooting');

    var text : string = 'plain text';
    this.print(text);
    this.printAll(text);

    //console.log(this.title2, this.num, this.all, this.name);
    console.log(this.todo);

  }

  /**
   * 어떤 특정 데이터를 주는 서버에 갔다 왔다고 가정한다.
   * 예를들어 ajax를 실행하고 나서 result값이 아래와 같은 배열이 나왔다고 가정한다.
   */
  private ifIwereGoToServer() : void {
    this.all.push('Result');
    this.all.push('12345');
    this.all.push('67890');
    this.all.push('58012');
  }

  /**
   * 메소드 실행될 시 title2의 string을 변경시키는 메소드
   */
  private changeTitle() {
    this.title2 ='title2 내용을 바꾸겠습니다.';
  }


}
