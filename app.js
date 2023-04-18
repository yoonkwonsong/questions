document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        document
            .querySelectorAll(".card")
            .forEach((c) => c.classList.remove("open-card"))

        if (e.currentTarget.classList.contains("btn-plus")) {
            e.currentTarget.parentElement.parentElement.parentElement.classList.add(
                "open-card"
            )
        }
        if (e.currentTarget.classList.contains("btn-minus")) {
            e.currentTarget.parentElement.parentElement.parentElement.classList.remove(
                "open-card"
            )
        }
    })
})
