const NewsItem = (props) => {
    return (
        <div class=" tm-timeline-item">
            <div class="tm-timeline-item-inner">
                <img src="img/img-01.jpg" alt="Image" class="rounded-circle tm-img-timeline" />
                <div class="tm-timeline-connector">
                    <p class="mb-0">&nbsp;</p>
                </div>
                <div class="tm-timeline-description-wrap">
                    <div class="tm-bg-dark tm-timeline-description">
                        <h3 class="tm-text-green tm-font-400">{props.data.title}</h3>
                        <p>{props.data.description}</p>
                        <p class="tm-text-green float-right mb-0">{props.data.published_at}</p>
                    </div>
                </div>
            </div>
            <div class="tm-timeline-connector-vertical"></div>
        </div>
    )
}
export default NewsItem;