const dateFormater = new Intl.DateTimeFormat("en-IN", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "short",
    day: "2-digit"
})

export const formatDate = (date) => dateFormater.format(date);