import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // ?
  templateUrl: './app.component.html', // ts가 동작하고 난 이후에 만들어진 html파일 주소
  styleUrls: ['./app.component.css'] // 해당 html의 css를 설정하는 css파일 주소
})
export class AppComponent {
  private title: string = 'Angular_Study'; // 제목
  private list: any = new Array(); // 데이터를 그릴 대상


  private leftButtonName: string = 'Left'; // 왼쪽 버튼 이름
  private rightButtonName: string = 'Right'; // 오른쪽 버튼 이름

  constructor() {
    //생성자는 컴포넌트 파일이 읽히면서 자동으로 실행되는 메소드이다.
    console.log('start');
    // 메소드를 이용해 데이터를 가져온다.
    this.goToServerAndGetData('first');
  }

  private goToServerAndGetData(type: string): void {
    // 데이터베이스로부터 데이터를 가져오는 함수
    this.list = new Array();
    if (type === 'first') {
      this.list.push([1, 'Joshua', '2019.12.31 11:15:37']);
      this.list.push([2, 'Developer', '2019.12.31 11:15:54']);
    } else if (type === 'left') {
      this.list.push([3, 'SoJongWon', '2019.12.32 13:15:56']);
      this.list.push([4, 'Guifindel', '2019.12.32 13:15:56']);
      this.list.push([5, 'Arin', '2019.12.32 13:15:56']);
      this.list.push([6, '최예원', '2019.12.32 13:15:56']);
      this.list.push([7, 'alice', '2019.12.32 13:15:56']);
    } else {

    }
  }
}
