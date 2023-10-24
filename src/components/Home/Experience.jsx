export default function Experience({ title, details, isEducation }) {
    const handleClick = (e) => {
        window.open(e, "_blank");
    }

    return (
        <section
            class="flex items-start justify-between flex-col sm:flex-row dark:text-light"
        >
            <h2 class="w-[15rem] mt-16">{title}</h2>
            <div class="w-full">
                {details.map((item, index) => (
                    <div class="my-16" key={index}>
                        <div class="flex justify-between items-center flex-wrap">
                            <h3 class="text-xl font-semibold">{item.name}</h3>
                            <p class="text-sm dark:text-gray">
                                {item.startDate} - {item.endDate}
                            </p>
                        </div>
                        <p class="text-sm mt-3 text-blue">{item.location}</p>
                        <ul class="mt-3">
                            {item.description.map((description, i) => (
                                <li class="dark:text-gray" key={i}>
                                    {description}
                                </li>
                            ))}
                        </ul>
                        {isEducation && item.certifficate && item.certifficate.link ? (
                            <p class="text-blue text-sm underline cursor-pointer pt-3" onClick={() => handleClick(item.certifficate.link)}>
                                {item.certifficate.text}
                            </p>
                        ) : null}
                    </div>
                ))}

            </div>
        </section>
    )
}