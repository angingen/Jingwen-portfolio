import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselCaption,CarouselIndicators } from 'reactstrap';
import { baseURL } from '../shared/baseURL';

class ProjectPic extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

        onExited() {
        this.animating = false;
    }

        next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

        previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

        goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
        
    render() {
        const { activeIndex } = this.state;
    
        const slides = this.props.items.map((item) => {
          return (
            <CarouselItem onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}>
              <div className="img-container">
                <img src={item.src} alt={item.altText} />
              </div>
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
    
        return (
          <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} >
            <CarouselIndicators items={this.props.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        );
    }
}

function RenderColor ({colorScheme, colorSchemeText}) {
    return (
        colorScheme.map((color,index) => 
            <div className="color" style={{backgroundColor: color, color: colorSchemeText}} key={index}>{color}</div>
        )
    );
}

function RenderFeatures ({features}) {
    return (
        features.map((feature,index) =>
            <li key={index}>{feature}</li>  
        )
    );
}

function RenderRealization ({realization}) {
    return (
        realization.map((paragraph,index) =>
            <p key={index}>{paragraph}</p>
        )
    );
}

function RenderProject ({project, isLoading, errMess}) {
    if (isLoading) {
        return (
            <div>Loading</div>
        );
    } else if (errMess) {
        return(
            <div>{errMess}</div>
        );
    } else {

        const items = project.image.map((image) => {
            return {
                src: baseURL + image.url,
                altText: image.caption,
                caption: ""
            }
        });

        return (
            <React.Fragment>
                <div className="section-title-container" style={{backgroundColor: project.themeColor.title}}>
                    <div>{'Project Title'.toUpperCase()}</div>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div className="publish-date"style={{backgroundColor: project.themeColor.publish}}>{"Publish: "+ project.publish}</div>
                    <span className="mask"></span>
                </div>
                <article>
                    <div className="container">
                        <div className="row intro-container">
                            <div className="col-12 order-0">
                                <img className="keyword-cloud" src={baseURL+project.wordcloud} alt="project keyword cloud"></img>
                            </div>
                            <div className="col-12 col-md-4 order-1 order-md-2 align-center sub-heading align-items-end" style={{color: project.themeColor.title}}>
                                <h2>Project Introduction<span>Introduction</span></h2>
                                
                            </div>
                            <div className="col-12 col-md-8 order-2 order-md-1">
                                <p>{project.intro}</p>
                            </div>
                            <div className="col-12 order-3 breaker"></div>
                            <div className="col-12 order-4 sub-heading" style={{color: project.themeColor.title}}>
                                <h2>Project Features<span>Features</span></h2>
                                
                            </div>
                            <div className="col-12 col-lg-6 order-5">
                                <ProjectPic items={items}/>
                            </div>
                            <div className="col-12 col-lg-6 order-6 align-center">
                                <ul><RenderFeatures features={project.features}/></ul>
                            </div>
                        </div>
                        <div className="row c2r-contianer">
                            <div className="col-12 breaker"></div>
                            <div className="col-12 col-md-4 sub-heading align-center" style={{color: project.themeColor.title}}>
                                <h2>Implementation<span>Implementation</span></h2>
                            </div>
                            <div className="col-12 col-md-8"><RenderRealization realization={project.realization} /></div>
                            <div className="col-12 breaker"></div>
                            <div className="col-12 d-flex justify-content-center m-3" style={{color: project.themeColor.title}}>
                                <h2>Color Scheme<span>Color</span></h2>
                            </div>
                            <div className="color-container col-12">
                                <RenderColor colorScheme={project.colorScheme} colorSchemeText={project.colorSchemeText}/>
                            </div>
                            <div className="col-12 color-des"><p>{project.colorSchemeExp}</p></div>
                        </div>
                        <div className="row demo-container">

                        </div>
                    </div>
                </article>
                <div className="section-footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-link"><a href={project.repo} target="_blank" rel="noopener noreferrer" title="View codes on the GitHub repository">GitHub</a></div>
                            <div className="footer-link"><a href={project.page} target="_blank" rel="noopener noreferrer" title="Go to this project's website">Website</a></div>
                            <div className="footer-link"><Link to="/projects">Projects</Link></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default class ProjectDemo extends Component {

    componentWillUnmount() {
        window.scroll({top:0, left:0, behavior: 'smooth'});
    }

    render() {
        return (
            <section className="project-demo" id="project-demo-section">
                <RenderProject project={this.props.project} isLoading={this.props.isLoading} errMess={this.props.errMess} />
            </section>
        );
    }
}