import React from "react";

export default class Content extends React.Component{
  constructor(props){
    super(props);
    this.state=  {
      searchString : '',
      contentString: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      newString: ''
      };
  }
  componentWillMount(){
    this.setState({newString: this.state.contentString});
  }
  updateInput(e){
    this.setState({searchString: e.target.value}, function(){
      // Code for searching string
      let { contentString, newString, searchString } = this.state;
      let regExp;
      regExp = new RegExp("(" +  searchString + ")", "gi");
      //RegExp.$1 will be the 1st matched string
      newString = contentString.replace(regExp, "<span style='background-color: yellow'>$1</span>");
      this.setState({newString: newString});
    });
  }

  render(){
    let { searchString, contentString, newString  } = this.state;
    return(
      <div>
        Search String:
        <input searchString={searchString} onChange={this.updateInput.bind(this)} autoFocus="autofocus" />
        <p dangerouslySetInnerHTML= {{__html: newString}} />
      </div>
    );
  }
}
