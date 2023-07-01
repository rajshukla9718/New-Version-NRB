function amenities() {
    document.getElementById("amen").classList.add("amenities-bg-active")
    document.getElementById("spec").classList.remove("amenities-bg-active")
    document.getElementById("lo").classList.remove("amenities-bg-active")
    document.getElementById("gall").classList.remove("amenities-bg-active")
    document.getElementById("amenities").style.display = "block"
    document.getElementById("specifications").style.display = "none"
    document.getElementById("loc").style.display = "none"
    document.getElementById("gallery").style.display = "none"
}
function specifications() {
    document.getElementById("amen").classList.remove("first-amen")
    document.getElementById("amen").classList.remove("amenities-bg-active")
    document.getElementById("spec").classList.add("amenities-bg-active")
    document.getElementById("lo").classList.remove("amenities-bg-active")
    document.getElementById("gall").classList.remove("amenities-bg-active")
    document.getElementById("amenities").style.display = "none"
    document.getElementById("specifications").style.display = "block"
    document.getElementById("loc").style.display = "none"
    document.getElementById("gallery").style.display = "none"
}
function loc() {
    document.getElementById("amen").classList.remove("first-amen")
    document.getElementById("amen").classList.remove("amenities-bg-active")
    document.getElementById("spec").classList.remove("amenities-bg-active")
    document.getElementById("lo").classList.add("amenities-bg-active")
    document.getElementById("gall").classList.remove("amenities-bg-active")
    document.getElementById("amenities").style.display = "none"
    document.getElementById("specifications").style.display = "none"
    document.getElementById("loc").style.display = "block"
    document.getElementById("gallery").style.display = "none"
}
function gallery() {
    document.getElementById("amen").classList.remove("first-amen")
    document.getElementById("amen").classList.remove("amenities-bg-active")
    document.getElementById("spec").classList.remove("amenities-bg-active")
    document.getElementById("lo").classList.remove("amenities-bg-active")
    document.getElementById("gall").classList.add("amenities-bg-active")
    document.getElementById("amenities").style.display = "none"
    document.getElementById("specifications").style.display = "none"
    document.getElementById("loc").style.display = "none"
    document.getElementById("gallery").style.display = "block"
}