(function(){
    const wrapEl =document.querySelector('.wrap')
    const barEl = document.querySelector('.bar')

    const handleScroll = () => {
        const scr = window.pageYOffset
        // console.log(wrapEl.offsetHeight)
        // console.log(window.innerHeight)
        // 윈도우가 엘리먼트가 아닌 브라우저이기 때문에 innerHeight를 사용

        const useScroll = wrapEl.offsetHeight - window.innerHeight
        console.log(useScroll)
        // 사용할 스크롤 값이 필요한 이유 : 스크롤 값을 적용하기 위해?
        const per = scr/useScroll *100
        console.log(per)
        barEl.style.width = per + '%'
        
    }

    window.addEventListener('scroll', handleScroll)
})()