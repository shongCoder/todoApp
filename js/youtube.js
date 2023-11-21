const youTubes = [
    `<iframe src="https://www.youtube.com/embed/mG1_vtBmB7g?si=J6NO6Kuvn3U-wC3f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    // 신이 되는 법
    `<iframe src="https://www.youtube.com/embed/Vur832hIn0k?si=Xe5Kr_Ap4ltYxQUK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    // 우주의 빈 공간
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/4Io1dr6aYl8?si=fCqbdSyYemFLbBAl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    // 바퀴벌레는 왜 인간을 못이길까
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/FhA37Sw4j8w?si=sWD_Wxr5VlCYjXUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    // 고양이 힐링
];

const chosenYouTube = youTubes[Math.floor(Math.random() * youTubes.length)];
const youTubeBox = document.querySelector("#youtube_con")
youTubeBox.innerHTML = chosenYouTube;
