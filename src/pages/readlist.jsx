

export default function ReadList() {


    return (
        <>
            <div className="container">
                <div className="about-me-container">
                    <h3>
                        $ less reading-list.txt
                    </h3>
                    <p>
                        books and blogs i've read
                    </p>
                </div>
                <div className="books-container">
                    <div className="book-container">
                        <div className="title">
                            <a href="#">
                            Designing Data-Intensive Applications
                            </a>
                        </div>
                        <div className="date">
                            <p>
                                reading
                            </p>
                        </div>
                    </div>
                    <div className="book-container">
                        <div className="title">
                            <a href="https://seated.ro/blog/tinkering-a-lost-art">
                                If you don't tinker, you don't have taste
                            </a>
                        </div>
                        <div className="date">
                            <p>
                                2025-03-18
                            </p>
                        </div>
                    </div>
                    <div className="book-container">
                        <div className="title">
                            <a href="https://seated.ro/blog/rabbit-hole-learning">
                                rabbit hole learning
                            </a>
                        </div>
                        <div className="date">
                            <p>
                                2025-03-17
                            </p>
                        </div>
                    </div>
                    <div className="book-container">
                        <div className="title">
                            <a href="https://lelouch.dev/blog/you-are-probably-not-dumb/">
                                You Are NOT Dumb, You Just Lack the Prerequisites
                            </a>
                        </div>
                        <div className="date">
                            <p>
                                2025-01-12
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}