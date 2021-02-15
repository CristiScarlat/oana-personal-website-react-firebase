import React from 'react';

function Home() {
    return (
        <>
            <div className="container-fluid d-flex h-100 mt-4 align-items-center justify-content-between" style={{background: 'white'}}>
                <img src="images/oana_painted.jpg" className="img-fluid home-img" alt="" />
                <div className="home-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra tortor ut sapien euismod luctus.
                    Duis in turpis tristique, laoreet eros et, rhoncus urna. Vivamus vestibulum quis massa eget tempus. Duis
                    nunc lectus, varius ut semper sed, hendrerit ac leo. Nunc ut diam eu lorem gravida scelerisque eget sit amet
                    enim. Vestibulum blandit id magna vitae vulputate. Etiam pharetra risus sit amet rutrum efficitur. Fusce
                    nisi sem, lobortis quis pharetra eget, hendrerit ac ligula.
                </div>
            </div>
            <div className="balloon"></div>
        </>
    )
}

export default Home;



