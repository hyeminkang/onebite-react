// 5가지 배열 변형 메서드
// 1. filter
// filter는 기존배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 생성
// find 나 findIndex와 비슷한 문법을 갖고잇음
let arr1 = [
    {name:'이정환', hobby:'테니스'},
    {name:'김효빈', hobby:'테니스'},
    {name:'홍길동', hobby:'독서'},
]
//hobby가 테니스인 두개의 요소들만 필터링해서 새로운 배열로 만들수잇음

const tennisPeople = arr1.filter(
    item => {
        if ( item.hobby === '테니스') return true
    }
)
/** 간략히하기 **/
/*
const tennisPeople = arr1.filter( item => item.hobby === '테니스');
*/
console.log(tennisPeople) // {name: '이정환', hobby: '테니스'} {name: '김효빈', hobby: '테니스'} 출력됨
// 서비스를 개발할때 특정 조건에 의해서 검색시키는 기능이나 
// 또는 카테고리별 필터 같은 기능을 만드는데 거의 필수적으로 사용



// 2. map 
// 정말 자주활용됨, 배열의 모든 요소를 순회하면서 각각 콜백함술르 실행하고 그 결과값들을 모아서 새로운 배열로 반환 
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr) =>{ 
    /*console.log(idx, item);*/
    return item * 2;
})
//0 1 ,  1 2 , 2 3 인덱스 0 > 1 인덱스1 >2 인덱스2> 3 이케 출력
// foreach 메서드와 동일하게 동작함
// 콜백함수 안에서 반환값을 설정할수도 있음!!
console.log(mapResult1) //  [2, 4, 6] 새로운 배열출력

let names = arr1.map((item) =>item.name)
console.log(names); // ['이정환', '김효빈', '홍길동']



// 3. sort메서드
// 배열을 사전순으로 정렬하는 메서드
let arr3 =  ["b","a", "c"];
arr3.sort(); 
console.log(arr3) // ['a', 'b', 'c'] 출력 

let arr4 =  [10,3,5];
arr4.sort(); 
console.log(arr4) //  [10, 3, 5] 출력 >> 문자열로 이루어진게 아니라 숫자로 이루어진 배열이면 sort는 정상적으로 동작하지않음

// sort 메서드는 사전순으로 정렬하기때문인데, 숫자의 대소비교로 한게아니고 사전순으로 한거기때문에,,
// 숫자의 대소관계를 기준으로 정렬하고 싶다면 sort메서드를 호출하고 비교 기준을 설정하는 콜백함수도 ㅎ ㅏㅁ께 넘겨줘야함

/* 정상작동 하게 해보자 */
let arr5 =  [10,3,5];
/** 오름차순 **/
arr5.sort((a,b) => {
    if( a > b) {
        // 작은값이 앞으로 b가 a앞을 ㅗ오게해라
        return 1;
    } else if ( a< b ) {
        // a가 b앞을 ㅗ오게해라
        return -1;
    } else {
        return 0 // 같은 값이라면 자리를 바꾸지 말아라
    }
}); 
console.log(arr5); //[3, 5, 10] 출력

/** 내림차순 **/
let arr6 =  [10,3,5];
arr6.sort((a,b) => {
    if( a > b) {
        // a가 b앞으로 오게해라
        return -1;
    } else if ( a < b ) {
        // b가 a앞을 ㅗ오게해라
        return 1;
    } else {
        return 0 // 같은 값이라면 자리를 바꾸지 말아라
    }
}); 
console.log(arr6);



// 4. toSorted (최신함수임!!)
// sort처럼 정렬함, 무슨 차이가 있냐면 sort는 원본 배열자체를 바꿈, toSorted는 새로운 배열을 반환 
let arr10 = ["c","a","b"];
const sorted = arr10.toSorted();

console.log(arr10) //  ['c', 'a', 'b'] 출력
console.log(sorted) // ['a', 'b', 'c'] 출력



// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr11 = ["hi","im","winterwood"];
const joined = arr11.join('-'); // 구분자를 바꾸고싶다면 '' 하고 넣어주면됨
console.log(joined ) // hi,im,winterwood 출력