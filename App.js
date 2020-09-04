'use stricts';

class Wrapper extends React.Component {

    render() {
        return (
          <div className={this.props.name}>
            {this.props.children}
          </div>
        );
    }
}

class Href extends React.Component {

    render() {
        return (
            <a href={this.props.href} className={this.props.name}>
                {this.props.children}
            </a>
        );
    }
}

class Btn extends React.Component {

    render() {
        return (
            <button className={this.props.name} onClick={() => console.log('клик')}>
                {this.props.children}
            </button>
        );
    }
}

class SliderItem extends React.Component {

    render() {
        return (
            <div className={this.props.name + "-slider_item"}>
                <div className={this.props.name + "-img"} style={{backgroundImage: this.props.href}}></div>
                <div className={this.props.name + "-feature"}>{this.props.text}</div>
            </div>
        );
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.state = {
            name: '',
            phone: '',
            email: '',
        };
    }

    render() {
        return (
            <form action={this.props.action} className={this.props.name}>
                <input type="text" placeholder="Ваше имя" value={this.state.name} onChange={this.handleChangeName}/> 
                <input type="tel" placeholder="Телефон" value={this.state.phone} onChange={this.handleChangePhone}/> 
                <input type="email" placeholder="E-mail" value={this.state.email} onChange={this.handleChangeEmail}/>
                <Btn name="btn contact-btn">
                    <span>Позвоните мне</span>
                </Btn>
            </form>
        );
        
    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
    }
    handleChangePhone(e) {
        this.setState({phone: e.target.value});
    }
    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }
}

class App extends React.Component {
    render() {
      return (
        <div>
            <header>
                <Wrapper name="wrapper">
                    <Wrapper name="header">
                        <Href href="#" name="">
                            <Wrapper name="header-logo"/>
                        </Href>
                        <Href href="tel:888" name="header-phone" />
                        <Wrapper name="header-phonelink">
                            <Href href="tel:7(962)556-1234" name="">
                                +7(962)556-1234
                            </Href>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </header>
            <main>
                <Wrapper name="wrapper">
                    <Wrapper name="main">
                        <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
                        <div className="main-small">
                            Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
                             вебмастеру сгенерировать несколько абзацев более.
                        </div>
                        <Btn name="btn main-btn">
                            <span>Подробнее</span>
                        </Btn>
                    </Wrapper>
                </Wrapper>
            </main>
            <section className="features">
                <Wrapper name="wrapper">
                    <Wrapper name="features-wrapper">
                        <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
                        <div className="features-subhead">О нас</div>
                        <Wrapper name="features-description">
                            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                            сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
                            оратору отточить.
                        </Wrapper>
                        <Wrapper name="features-slider">
                            <div className="features-slider_items">
                                <SliderItem name="features" href="url(./images/1.svg)" text="Первое целевое преимущество" />
                                <SliderItem name="features" href="url(./images/2.svg)" text="Второе целевое преимущество" />
                                <SliderItem name="features" href="url(./images/3.svg)" text="Третье целевое преимущество" />
                                <SliderItem name="features" href="url(./images/4.svg)" text="Четвертое целевое преимущество" />
                            </div>
                            <Btn name="features-slider-arrow features-slider-prev">
                                <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                            d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                    </path>
                                </svg>
                            </Btn>
                            <Btn name="features-slider-arrow features-slider-next">
                                <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                            d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                    </path>
                                </svg>
                            </Btn>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </section>
            <section className="contact">
                <Wrapper name="wrapper">
                    <Wrapper name="contact-wrapper">
                        <h2 className="contact-title">Остались вопросы?</h2>
                        <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
                        <Form action="../mailer.smart.php" name="contact-form" />
                        <div className="contact-personal">Я даю своё <Href href="#" name="">согласие</Href> на обработку моих персональных данных.
                        </div>
                    </Wrapper>
                </Wrapper>
            </section>
            <footer>
                <Wrapper name="footer">
                    <div className="footer-logo"></div>
                    <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
                    <Href href="tel:888" name="footer-phone"/>
                    <div className="footer-websurfer"><span className="footer-websurfer_build">Сделано</span>&nbsp;<Href href="#" name="">Ваше имя</Href></div>
                    <div className="footer-phonelink"><Href href="tel:888" name="">+7(962)556-1234</Href></div>
                </Wrapper>
            </footer>
        </div>
      );
    }
  }

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);