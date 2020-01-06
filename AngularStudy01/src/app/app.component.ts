// 앵귤러에서는 기존의 javascript에서 <script src="파일.js"/> 와 동일한 기능을 한다고
// 생각하자.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  // 기존의 templateUrl을 주석처리하고(즉 app.component.html에서 작성한 모든 것을
  // 반영하지 않고), 새롭게 template를 작성하면 이곳에서 작성한 html로 모든것이 적용되는
  // 것을 확인할 수 있다. 즉 앵귤러에서 화면을 구성하는 것은 컴포넌트이다.
  // '앵귤러는 컴포넌트에 의해서 화면이 구성된다.'
  templateUrl: './app.component.html',
  //template: '<div>무엇이</div><div>이것이 title : {{title}}</div>',

  styleUrls: ['./app.component.css']
})

// export를 적용하지 않는다면 코드는 내부에서만 적용되기 때문에 의미없이 오류만 내보낸다.
// 일단은 export는 각종 메소드 변수등을 묶는 꾸러미라는 개념으로 이해하자
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

  private list: Array<any> = new Array();

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
