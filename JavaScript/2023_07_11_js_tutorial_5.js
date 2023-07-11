
let age = prompt("나이를 입력해주세요~")
let gender = prompt ("성별을 입력해주세요~ (남자/여자)")

if (age >= 20) {
    if (gender == "남자") {
        alert("성인 남자")
    } else {
        alert("성인 여자")
    }
} else if (age >= 17) {
    if (gender == "남자") {
        alert("고등 남학생")
    } else {
        alert("고등 여학생")
    }
} else if (age >= 14) {
    if (gender == "남자") {
        alert("중등 남학생")
    } else {
        alert("중등 여학생")
    }
} else if (age >= 8) {
    if (gender == "남자") {
        alert("초등 남학생")
    } else {
        alert("초등 여학생")
    }
} else if (age >= 0) {
    if (gender == "남자") {
        alert("유아 남자")
    } else {
        alert("유아 여자")
    }
}