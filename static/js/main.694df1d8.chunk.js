(this["webpackJsonptime-to-plan"]=this["webpackJsonptime-to-plan"]||[]).push([[0],{136:function(e,t,a){e.exports=a.p+"static/media/Dessert_Safari.159159ee.jpg"},137:function(e,t,a){e.exports=a.p+"static/media/skydive.329ba11b.jpg"},138:function(e,t,a){e.exports=a.p+"static/media/HawaiiHikes__Hero_.035e0276.jpg"},139:function(e,t,a){e.exports=a.p+"static/media/ski-resorts.a4da97ff.jpg"},140:function(e,t,a){e.exports=a.p+"static/media/incredible-car-wallpaper-lamborghini-terzo-millennio-digital-art-hd-cars-4k-wallpapers.bf09ed8c.jpg"},141:function(e,t,a){e.exports=a.p+"static/media/giphy1.07d8c356.gif"},142:function(e,t,a){e.exports=a.p+"static/media/giphy2.86a893ed.gif"},143:function(e,t,a){e.exports=a.p+"static/media/goalSteps.64330f45.jpg"},144:function(e,t,a){e.exports=a.p+"static/media/MI-Theory.bac4fd05.jpg"},145:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),n=a(29),r=a.n(n),i=(a(93),a(94),a(30)),s=a(32),c=(a(95),a(23)),m=a(24),u=a(26),d=a(25),p=a(27),h=function(e){return e.children},E=a(47),g=a(44),y=a.n(g),v=function(e){return o.a.createElement(E.a,{className:y.a.Navbar,collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},o.a.createElement(i.c,{to:"/TimeToPlan/"},o.a.createElement(E.a.Brand,{className:y.a.appTitle},"TimeToPlan")),o.a.createElement(i.c,{to:"/create-story/"},o.a.createElement(E.a.Brand,{className:y.a.appContent},"Your Story")),o.a.createElement(i.c,{to:"/create-goals/"},o.a.createElement(E.a.Brand,{className:y.a.appContent},"Create Goals")),o.a.createElement(i.c,{to:"/saved-list/"},o.a.createElement(E.a.Brand,{className:y.a.appContent},"Your Plans")))},S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(h,null,o.a.createElement(v,null),o.a.createElement("main",null,this.props.children))}}]),t}(l.Component),_=a(43),f=a(13),k=a(9),G=a(6),C=a.n(G),w=a(8),D=a(31),b=a.n(D),x={savedStory:function(e){return b.a.post("https://safe-anchorage-29156.herokuapp.com/api/create-story",e)},getStories:function(){return b.a.get(" https://safe-anchorage-29156.herokuapp.com/api/stories")},deleteStory:function(e){return b.a.delete("https://safe-anchorage-29156.herokuapp.com/api/story/"+e)},updateStory:function(e,t){return b.a.put("http://localhost:3001/api/story/"+e,t)},savedGoal:function(e){return b.a.post("http://localhost:3001/api/create-goal",e)},getGoals:function(){return b.a.get("http://localhost:3001/api/goals")},deleteGoal:function(e){return b.a.delete("http://localhost:3001/api/goals/"+e)},updateGoal:function(e,t){return b.a.put("http://localhost:3001/api/goals/"+e,t)}},I=a(52),N=a(34),T=a.n(N),L=a(36),H=a(50),B=a(4),A=function(e){var t=Object(l.useState)(!!e.showEditModal),a=Object(I.a)(t,2),n=a[0],r=a[1],i="",s="",c="";return o.a.createElement(H.a,null,o.a.createElement(L.a,{size:"lg",show:n,onHide:function(){r(!1),e.cancelEditGoal()},"aria-labelledby":"example-modal-sizes-title-lg"},o.a.createElement(L.a.Header,null,o.a.createElement(L.a.Title,{id:"example-modal-sizes-title-lg"},"Edit Goals")),o.a.createElement(B.a,{className:T.a.InputElement},o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput1"},o.a.createElement(B.a.Label,null,"Title"),o.a.createElement(B.a.Control,{type:"text",defaultValue:e.EditWriteGoalTitle,onChange:function(e){e.preventDefault(),console.log(e.target.value),i=e.target.value}})),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput2"},o.a.createElement(B.a.Label,null,"Image Link"),o.a.createElement(B.a.Control,{type:"text",placeholder:"https://example.png",defaultValue:e.EditGoaLink,onChange:function(e){e.preventDefault(),console.log(e.target.value),s=e.target.value}})),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlTextarea3"},o.a.createElement(B.a.Label,null,"Description"),o.a.createElement(B.a.Control,{as:"textarea",placeholder:"Text Area",rows:"4",defaultValue:e.EditGoalDescription,onChange:function(e){e.preventDefault(),console.log(e.target.value),c=e.target.value}}))),o.a.createElement(w.a,{className:T.a.modalButton,variant:"success",type:"button",onClick:function(){return e.saveUpdateGoal({title:i,link:s,description:c})},size:"sm"},"Save"),o.a.createElement(w.a,{className:T.a.modalButton,variant:"danger",type:"button",onClick:e.cancelEditGoal,size:"sm"},"Cancel")))},P=a(21),O=a.n(P),j=function(e){var t=Object(l.useState)(!!e.showEditStoryModal),a=Object(I.a)(t,2),n=a[0],r=a[1],i="",s="",c="",m="",u="";return o.a.createElement(H.a,null,o.a.createElement(L.a,{size:"lg",show:n,onHide:function(){r(!1)},"aria-labelledby":"example-modal-sizes-title-lg"},o.a.createElement(L.a.Header,null,o.a.createElement(L.a.Title,{id:"example-modal-sizes-title-lg"},"Edit Story")),o.a.createElement(B.a,{className:O.a.editStoryForm},o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput1"},o.a.createElement(B.a.Label,null,"Title"),o.a.createElement(B.a.Control,{type:"text",defaultValue:e.editWriteStoryTitle,onChange:function(e){e.preventDefault(),console.log(e.target.value),i=e.target.value}})),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput1"},o.a.createElement(B.a.Label,null,"Background Image URL"),o.a.createElement(B.a.Control,{type:"text",defaultValue:e.editStoryBackground,onChange:function(e){e.preventDefault(),console.log(e.target.value),c=e.target.value}})),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput1"},o.a.createElement(B.a.Label,null,"Profile Image URL"),o.a.createElement(B.a.Control,{type:"text",defaultValue:e.editStoryProfile,onChange:function(e){e.preventDefault(),console.log(e.target.value),m=e.target.value}})),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput1"},o.a.createElement(B.a.Label,null,"Author"),o.a.createElement(B.a.Control,{type:"text",defaultValue:e.editStoryAuthor,onChange:function(e){e.preventDefault(),console.log(e.target.value),u=e.target.value}})),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlTextarea3"},o.a.createElement(B.a.Label,null,"Description"),o.a.createElement(B.a.Control,{as:"textarea",placeholder:"Text Area",rows:"4",defaultValue:e.editStoryDescription,onChange:function(e){e.preventDefault(),console.log(e.target.value),s=e.target.value}}))),o.a.createElement(w.a,{className:O.a.modalButton,variant:"success",type:"button",onClick:function(){return e.saveUpdateStory({storyTitle:i,storyBackground:c,storyProfile:m,storyDescription:s,storyAuthor:u})},size:"sm"},"Save"),o.a.createElement(w.a,{className:O.a.modalButton,variant:"danger",type:"button",onClick:e.cancelEditStory,size:"sm"},"Cancel")))},F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,o=new Array(l),n=0;n<l;n++)o[n]=arguments[n];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={posts:[],goals:[],title:"no title",link:"no link",description:"no description",editGoal:!1,editGoalId:"no id",totalGoal:0,achievedGoal:0,remainingGoal:0,storyTitle:"no title",storyDescription:"no description",storyBackground:"no background",storyProfile:" no profile",storyAuthor:"no author",editStory:!1,editStoryId:"no id",completedGoalId:"no id"},a.getStory=function(){x.getStories((function(e,t){e&&console.log("Something Wrong")})).then((function(e){console.log("Get Method"),a.setState({posts:e.data.data})}))},a.getGoals=function(){x.getGoals((function(e,t){e&&console.log("Something Wrong")})).then((function(e){console.log("Get Goals Method"),console.log(e.data),a.setState({goals:e.data.data})}))},a.deleteStory=function(e){x.deleteStory(e).then((function(t){var l=a.state.posts.filter((function(t){return t._id!==e}));a.setState({posts:l})}))},a.showEditStoryHandler=function(e,t){console.log("show story edit handler"),console.log({id:e}),console.log({story:t}),e&&a.setState({editStory:!0,storyTitle:t.title,storyDescription:t.story,storyBackground:t.backgroundImage,storyProfile:t.profileImage,storyAuthor:t.author,editStoryId:e})},a.saveUpdateStory=function(e){console.log("save edit story data will be update"),console.log({data:e});var t=a.state.editStoryId,l={title:a.state.storyTitle,story:a.state.storyDescription,profileImage:a.state.storyProfile,backgroundImage:a.state.storyBackground,author:a.state.storyAuthor};e.storyTitle&&(l.title=e.storyTitle),e.storyDescription&&(l.story=e.storyDescription),e.storyProfile&&(l.profileImage=e.storyProfile),e.storyBackground&&(l.backgroundImage=e.storyBackground),e.storyAuthor&&(l.author=e.storyAuthor),x.updateStory(t,l).then((function(e){console.log({response:e}),a.getStory(),a.setState({editStory:!1})}))},a.cancelEditStoryHandler=function(){console.log("story cancel"),a.setState({editStory:!1})},a.deleteGoal=function(e){x.deleteGoal(e).then((function(t){var l=a.state.goals.filter((function(t){return t._id!==e}));a.setState({goals:l})}))},a.saveUpdateGoal=function(e){console.log("save edit data will be update");var t=a.state.editGoalId,l={title:a.state.title,link:a.state.link,description:a.state.description};console.log({data:e}),e.title&&(l.title=e.title),e.link&&(l.link=e.link),e.description&&(l.description=e.description),a.tempUpdate(t,l)},a.updateCompleteGoal=function(e,t){var l={title:t.title,link:t.link,description:t.description,completeGoal:!t.completeGoal};console.log({id:e}),console.log({data:t}),a.tempUpdate(e,l)},a.tempUpdate=function(e,t){x.updateGoal(e,t).then((function(e){console.log({response:e}),a.getGoals(),a.setState({editGoal:!1})}))},a.showEditGoalHandler=function(e,t){console.log("show edit handler"),e&&a.setState({editGoal:!0,title:t.title,link:t.link,description:t.description,editGoalId:e})},a.cancelEditGoalHandler=function(){a.setState({editGoal:!1})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getStory(),this.getGoals()}},{key:"render",value:function(){var e=this,t=this.state.goals.filter((function(e){return e.completeGoal})).length;console.log("increment complete"),console.log({Goals:this.state.goals}),console.log({achievedGoal:t});var a=this.state.goals.length-t;console.log({remainingGoals:a}),console.log("renders");var l="No Story Available";this.state.posts.length&&(l=this.state.posts.map((function(t){return o.a.createElement(f.a,{className:C.a.editStoryMainDiv},o.a.createElement(f.a,{className:C.a.editStoryImageDiv},o.a.createElement("img",{style:{width:"100%",height:"320px"},key:t.id,src:t.backgroundImage,alt:"Background"}),o.a.createElement(k.a,{className:C.a.editStoryProfileDiv},o.a.createElement("img",{style:{width:"150px",height:"150px"},key:t.id,src:t.profileImage,alt:"Profile"})),o.a.createElement(k.a,{className:C.a.editStoryTitle},o.a.createElement("p",{key:t.id},t.title)),o.a.createElement(k.a,{className:C.a.editStoryAuthor},o.a.createElement("p",{key:t.id},"Author: ",t.author)),o.a.createElement(k.a,{className:C.a.editStoryButton},"\xa0",o.a.createElement(w.a,{variant:"primary",onClick:function(){return e.showEditStoryHandler(t._id,t)}},"Edit"),"\xa0",o.a.createElement(w.a,{variant:"danger",onClick:function(){return e.deleteStory(t._id)}}," Delete"))),o.a.createElement(f.a,{className:C.a.editStoryDescriptionDiv},o.a.createElement(k.a,{className:C.a.editStoryDescription},o.a.createElement("p",{key:t.id}," ",t.story))))})));var n="No Goals Available";this.state.goals.length&&(n=this.state.goals.map((function(t){return o.a.createElement(f.a,{className:C.a.GoalParentRow},t.completeGoal?o.a.createElement(f.a,{className:C.a.GoalChildRow},o.a.createElement(k.a,{className:C.a.GoalImageDarkDiv},o.a.createElement("img",{style:{width:"100%",height:"220px"},key:t.id,src:t.link,alt:"Life Goals"}))):o.a.createElement(f.a,{className:C.a.GoalChildRow},o.a.createElement(k.a,{className:C.a.GoalImage},o.a.createElement("img",{style:{width:"340px",height:"220px"},key:t.id,src:t.link,alt:"Life Goals"})),o.a.createElement(k.a,{className:C.a.GoalDescription},o.a.createElement("p",{key:t.id},t.description))),t.completeGoal?o.a.createElement(f.a,{className:C.a.GoalChildRow},o.a.createElement(k.a,{className:C.a.GoalTittle},o.a.createElement("h4",{key:t.id},t.title)),o.a.createElement(k.a,{className:C.a.GoalButtons},"\xa0",o.a.createElement(w.a,{variant:"success",size:"sm",onClick:function(){return e.updateCompleteGoal(t._id,t)}}," Activate"),"                                        ")):o.a.createElement(f.a,{className:C.a.GoalChildRow},o.a.createElement(k.a,{className:C.a.GoalTittle},o.a.createElement("h4",{key:t.id},t.title)),o.a.createElement(k.a,{className:C.a.GoalButtons},"\xa0",o.a.createElement(w.a,{variant:"primary",size:"sm",onClick:function(){return e.showEditGoalHandler(t._id,t)}},"Edit"),"\xa0",o.a.createElement(w.a,{variant:"danger",size:"sm",onClick:function(){return e.deleteGoal(t._id)}}," Delete"),"\xa0",o.a.createElement(w.a,{variant:"success",size:"sm",onClick:function(){return e.updateCompleteGoal(t._id,t)}}," Complete"))))})));var r="";this.state.editGoal&&(r=o.a.createElement(A,{id:this.state.editGoalId,cancelEditGoal:this.cancelEditGoalHandler,EditWriteGoalTitle:this.state.title,EditGoaLink:this.state.link,EditGoalDescription:this.state.description,showEditModal:this.state.editGoal,saveUpdateGoal:this.saveUpdateGoal}));var i="";return this.state.editStory&&(console.log("welcome edit story new"),i=o.a.createElement(j,{id:this.state.editStoryId,showEditStoryModal:this.state.editStory,cancelEditStory:this.cancelEditStoryHandler,editWriteStoryTitle:this.state.storyTitle,editStoryDescription:this.state.storyDescription,editStoryBackground:this.state.storyBackground,editStoryProfile:this.state.storyProfile,editStoryAuthor:this.state.storyAuthor,saveUpdateStory:this.saveUpdateStory})),o.a.createElement(_.a,{className:C.a.container},o.a.createElement(f.a,null,o.a.createElement(k.a,null,o.a.createElement("h1",{className:C.a.title},"Your Life Goals Saved List"),o.a.createElement("h3",null,"Goals Achievments Summary"),o.a.createElement("div",{className:C.a.goalAchievment},o.a.createElement("div",{className:C.a.Summary},o.a.createElement("h4",null," Goals Status"),o.a.createElement("ul",null,o.a.createElement("li",null,"Total Goals: ",o.a.createElement("span",{style:{color:"blue",fontSize:"25px"}}," ",this.state.goals.length)),o.a.createElement("li",null,"Achieved Goals:",o.a.createElement("span",{style:{color:"green",fontSize:"25px"}},"  ",t)),o.a.createElement("li",null,"Remaining Goals:",o.a.createElement("span",{style:{color:"red",fontSize:"25px"}}," ",a," ")))),o.a.createElement("div",{className:C.a.Graph},o.a.createElement("p",null," Graph"),o.a.createElement("img",{style:{width:"100%",height:"195px",margin:"1px"},src:"https://cdn4.iconfinder.com/data/icons/business-and-office-7-1/64/400-512.png",alt:"sketch"}))))),o.a.createElement(f.a,null,o.a.createElement(k.a,null,o.a.createElement("h3",null,"Your Story"),o.a.createElement("div",{className:C.a.Story},o.a.createElement("div",null,l)))),o.a.createElement(f.a,null,o.a.createElement(k.a,null,o.a.createElement("h3",null,"Your Goals List"),n,r,i)))}}]),t}(l.Component),M=a(55);var V=function(e){var t=[O.a.InputElement];return e.isValidCheck?t.push(O.a.InputElement):t.push(O.a.Invalid),o.a.createElement("div",{className:O.a.inputStoryForm},o.a.createElement("h1",null,"Create Your Life Story"),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput1",className:O.a.formTitle},o.a.createElement(B.a.Label,null,"Title"),o.a.createElement(B.a.Control,{type:"text",placeholder:"Example: My Memories",value:e.writeTitle,onChange:e.writeTitleHandler,className:t.join(" ")})),o.a.createElement(M.a,null,o.a.createElement(M.a.Prepend,null,o.a.createElement(M.a.Text,null,"User Life Story",o.a.createElement("img",{style:{width:"40vh",height:"20vh",margin:"0px 0px 0px 10px"},src:"http://daystarbooks.org/wp-content/uploads/2016/05/life_story.png",alt:"media"}))),o.a.createElement(B.a.Control,{as:"textarea","aria-label":"With textarea",rows:"5",placeholder:"Example: Marriage and Family Harmony. ... Proper Mindset and Balance. ... Commitment to Improved Physical Health. ... Career Passion and Personal Satisfaction. ... Develop Empathy and Gentleness. ... Financial Stability. ... Service and Social Responsibility.",value:e.writeStory,onChange:e.writeStoryHandler,className:t.join(" ")})),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput1"},o.a.createElement(B.a.Label,null,"Profle Image URL"),o.a.createElement(B.a.Control,{type:"text",placeholder:"https://example.png",value:e.writeProfileImage,onChange:e.writeProfileImageHandler,className:t.join(" ")})),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput1"},o.a.createElement(B.a.Label,null,"Background Image URL"),o.a.createElement(B.a.Control,{type:"text",placeholder:"https://example.png",value:e.writeBackgroundImage,onChange:e.backgroundImageHandler,className:t.join(" ")})),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput1"},o.a.createElement(B.a.Label,null,"Author"),o.a.createElement(B.a.Control,{type:"text",placeholder:"Author Name",value:e.writeAuthor,onChange:e.writeAuthorHandler,className:t.join(" ")})),o.a.createElement(w.a,{variant:"success",type:"button",onClick:e.submitStory,size:"sm",className:O.a.StoryButton},"Add Story"))},z=a(16),R=a.n(z),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,o=new Array(l),n=0;n<l;n++)o[n]=arguments[n];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",story:"",profileImage:"",backgroundImage:"",author:"",showCreateStory:!0,showPostStory:"nodata",isValid:!0,savedData:[]},a.titleEventHandler=function(e){a.setState({title:e.target.value})},a.storyEventHandler=function(e){a.setState({story:e.target.value})},a.profileImageEventHandler=function(e){a.setState({profileImage:e.target.value})},a.backgroundImageEventHandler=function(e){a.setState({backgroundImage:e.target.value})},a.authorEventHandler=function(e){a.setState({author:e.target.value})},a.postStoryDataHandler=function(){if(console.log("post data activate"),a.state.story&&a.state.title&&a.state.author){var e={title:a.state.title,story:a.state.story,profile:a.state.profile,background:a.state.backgroun,author:a.state.author};a.state.savedData.length||x.savedStory(e).then((function(e){console.log("Data Saved"),console.log(e),a.setState({showCreateStory:!1})}))}else a.setState({isValid:!1})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.getStories((function(e,t){e&&console.log("Something Wrong"),this.checkDatabaseHandler()})).then((function(t){console.log("Get Method"),console.log(t.data.data),e.setState({savedData:t.data.data}),console.log(e.state.savedData)}))}},{key:"render",value:function(){var e="No Story Available";this.state.savedData.length&&(e=this.state.savedData.map((function(e){return o.a.createElement("div",{className:R.a.createStoryMainDiv},o.a.createElement("div",{className:R.a.ImageDiv},o.a.createElement("img",{style:{width:"100%",height:"100vh"},key:e.id,src:e.backgroundImage,alt:"Background"})),o.a.createElement("div",{style:{margin:"65px auto auto auto",position:"relative",top:"-94vh"}},o.a.createElement("div",{className:R.a.createStoryPhotoDiv},o.a.createElement("img",{className:R.a.createStoryPhoto,key:e.id,src:e.profileImage,alt:"Profile"})),o.a.createElement("div",{className:R.a.createStoryTitleDiv},o.a.createElement("p",{key:e.id},e.title)),o.a.createElement("div",{className:R.a.createStoryDescriptionDiv},o.a.createElement("p",{key:e.id}," ",e.story)),o.a.createElement("div",{className:R.a.createStoryEditButtonDiv},o.a.createElement(i.b,{to:"/saved-list/"},o.a.createElement(w.a,{className:R.a.createStoryEditButton,type:"button",size:"sm"},"Edit Story"))),o.a.createElement("div",{className:R.a.createStoryAuthor},o.a.createElement("p",{key:e.id},"Author: ",e.author))))})));var t=null;return console.log("Welcome Create Story"),t=this.state.showCreateStory&&!this.state.savedData.length?o.a.createElement("div",{className:R.a.createStoryInputForm},o.a.createElement("div",{className:R.a.createStoryFormTitle},o.a.createElement(V,{writeTitle:this.state.title,writeTitleHandler:this.titleEventHandler,writeStory:this.state.story,writeStoryHandler:this.storyEventHandler,writeProfileImage:this.state.profileImage,writeProfileImageHandler:this.profileImageEventHandler,writeBackgroundImage:this.state.backgroundImage,backgroundImageHandler:this.backgroundImageEventHandler,writeAuthor:this.state.author,writeAuthorHandler:this.authorEventHandler,isValidCheck:this.state.isValid,submitStory:this.postStoryDataHandler}))):o.a.createElement("div",null,e),o.a.createElement(_.a,{className:R.a.createStoryContainerDiv},t)}}]),t}(l.Component),W=a(19),Y=a(38),K=a.n(Y),Z=function(){return o.a.createElement(W.a,{className:K.a.carouselMain},o.a.createElement(W.a.Item,null,o.a.createElement("img",{className:"d-block w-100 ",style:{height:"500px"},src:a(136),alt:"First slide"}),o.a.createElement(W.a.Caption,{className:K.a.Craouseltext},o.a.createElement("h2",null,"Make a Plan for World Famous Desert Safari"),o.a.createElement("p",null,"Dubai, UAE\u2013The Arabian Desert. Nevada, USA \u2013 The Black Rock Desert."),o.a.createElement("p",null,"Namibia, South Africa \u2013 The Namib Desert. Erg Chebbi, Morocco \u2013 The Sahara Desert."),o.a.createElement("p",null,"Outback, Australia \u2013 The Great Victoria Desert."))),o.a.createElement(W.a.Item,null,o.a.createElement("img",{className:"d-block w-100",style:{height:"500px"},src:a(137),alt:"Second slide"}),o.a.createElement(W.a.Caption,{className:K.a.Craouseltext},o.a.createElement("h2",null,"TOP PLACES TO SKYDIVE AROUND THE WORLD"),o.a.createElement("p",null,"Outerspace. Mount Everest, Nepal. ... Victoria Falls, South Africa. ... Santa Barbara, California. Santa Barbara is the location of North America's highest tandem skydive, at 18,000 ft! Interlaken, Switzerland. ... Fox Glacier, New Zealand. ... Dubai, United Arab Emirates. ... Denarau Island, Fiji. ..."))),o.a.createElement(W.a.Item,null,o.a.createElement("img",{className:"d-block w-100",style:{height:"500px"},src:a(138),alt:"Second slide"}),o.a.createElement(W.a.Caption,{className:K.a.Craouseltext},o.a.createElement("h2",null,"BE READY FOR HIKING"),o.a.createElement("h3",null,"Best Places in North America"),o.a.createElement("p",null,"Grand Teton National Park. Arches National Park. Olympic National Park. Kluane National Park and Reserve. Lake Tahoe. Big Sur. Telluride. Hawaii - The Big Island."))),o.a.createElement(W.a.Item,null,o.a.createElement("img",{className:"d-block w-100",style:{height:"500px"},src:a(139),alt:"Second slide"}),o.a.createElement(W.a.Caption,{className:K.a.Craouseltext},o.a.createElement("h2",null,"The Top Ski Resorts in the World"),o.a.createElement("p",null,"Revelstoke, BC. We still love Reve! ... Zinal/Grimentz, Switzerland. Swiss charm with serious kick ass terrain! ... Whistler, BC. ... Cortina d'Ampezzo, Italy. ... La Clusaz, France. ... Castle Mountain, Alberta. ... Niseko, Japan. ... Telluride, Colorado."))),o.a.createElement(W.a.Item,null,o.a.createElement("img",{className:"d-block w-100",style:{height:"500px"},src:a(140),alt:"Third slide"}),o.a.createElement(W.a.Caption,{className:K.a.Craouseltext},o.a.createElement("h2",null,"The Most Famous Car Races in the World"),o.a.createElement("p",null,"Monaco Grand Prix. The Formula One Monaco Grand Prix is held annually on the Circuit de Monaco since 1929. ... Indianapolis 500. ... 24 Hours of Le Mans. ... Daytona 500. ... Bathurst 1000. ... Rally Finland"))))},q=a(18),J=a.n(q),Q=function(e){return o.a.createElement("div",{className:J.a.mediaDiv},o.a.createElement("div",{className:J.a.mediaDivOne},o.a.createElement("img",{style:{width:"100%",height:"300px"},className:J.a.image,src:a(141),alt:"media"}),o.a.createElement("div",{className:J.a.mediaOneHover},o.a.createElement("p",{className:J.a.titleText},"What is a goal?",o.a.createElement("p",{className:J.a.textList},"Goal setting is a purposeful and explicit process that starts with identifying a new objective, skill, or project you want to achieve. Then, you make a plan for achieving it, and you work to complete it.")))),o.a.createElement("div",{className:J.a.mediaDivTwo},o.a.createElement("img",{style:{width:"100%",height:"300px"},className:J.a.image,src:a(142),alt:"media"}),o.a.createElement("div",{className:J.a.mediaTwoHover},o.a.createElement("p",{className:J.a.titleText},"Important Steps To Create Story",o.a.createElement("p",{className:J.a.textList},"Writing our personal stories is the most vulnerable kind of writing we can do. We fear being laughed at, rejected, or that our words will be met with silence. And in turn, we ourselves remain silent.",o.a.createElement("ul",null,o.a.createElement("li",null,"Tap into your emotions."),o.a.createElement("li",null,"List the turning points."),o.a.createElement("li",null,"Write everything down."),o.a.createElement("li",null,"Use the senses."),o.a.createElement("li",null,"Find the theme."),o.a.createElement("li",null,"Tell a story.")))))))},X=a(45),$=a.n(X),ee=function(e){return o.a.createElement("div",{className:$.a.footerDiv},o.a.createElement("div",{className:$.a.footerSec1},o.a.createElement("div",{className:$.a.footerAbout},o.a.createElement("a",{href:"test"},o.a.createElement("p",null,"About")),o.a.createElement("a",{href:"test"},"Demo")),o.a.createElement("div",{className:$.a.footerInfo},o.a.createElement("a",{href:"test"},o.a.createElement("p",null,"Future Development")),o.a.createElement("a",{href:"test"},"App Version"))),o.a.createElement("div",{className:$.a.footerSec2},o.a.createElement("p",null,"@Copyrite 2019 By Atif Tariq")))},te=a(37),ae=a.n(te),le=function(e){return o.a.createElement("div",{className:ae.a.sketchDiv},o.a.createElement("div",{className:ae.a.sketchDivOne},o.a.createElement("img",{style:{width:"100%",height:"300px"},className:ae.a.image,src:a(143),alt:"media"}),o.a.createElement("div",{className:ae.a.sketchOneHover},o.a.createElement("p",{className:ae.a.titleText},"Important Steps To Create Goals",o.a.createElement("ul",{className:ae.a.textList},o.a.createElement("li",null,"Think about the results you want to see"),o.a.createElement("li",null,"Create smart goals"),o.a.createElement("li",null,"Write your goals"),o.a.createElement("li",null,"Create an action plan"),o.a.createElement("li",null,"Create a timeline"),o.a.createElement("li",null,"Take action"),o.a.createElement("li",null,"Re-evaluate and assess your progress"))))),o.a.createElement("div",{className:ae.a.sketchDivTwo},o.a.createElement("img",{style:{width:"100%",height:"300px"},src:a(144),alt:"media"})))},oe=a(39),ne=a.n(oe),re=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,o=new Array(l),n=0;n<l;n++)o[n]=arguments[n];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).loginHandler=function(){alert("Login work in progress.....!")},a.signUpHandler=function(){alert("Sign up work in progress.....!")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(h,null,o.a.createElement("div",{className:ne.a.container},o.a.createElement("div",{className:ne.a.carousal},o.a.createElement(Z,null)),o.a.createElement("div",{className:ne.a.sectionTwo},o.a.createElement("h3",null,"Now, its Time TO Plan"),o.a.createElement("p",null,"Future plans are something everyone should have."),o.a.createElement(w.a,{className:ne.a.loginButton,variant:"success",type:"button",onClick:this.loginHandler},"Login"),o.a.createElement(w.a,{className:ne.a.signUpButton,variant:"primary",type:"button",onClick:this.signUpHandler},"Sign Up")),o.a.createElement("div",null,o.a.createElement(Q,null)),o.a.createElement("div",{className:ne.a.sketch}," ",o.a.createElement(le,null)),o.a.createElement("div",null,o.a.createElement(ee,null))))}}]),t}(l.Component),ie=a(46),se=a.n(ie);var ce=function(e){var t=[T.a.InputElement];return e.isValidGoals?t.push(T.a.InputElement):t.push(T.a.Invalid),o.a.createElement("div",null,o.a.createElement(B.a,null,o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput1"},o.a.createElement(B.a.Label,null,"Goal Title"),o.a.createElement(B.a.Control,{type:"text",placeholder:"Title",value:e.writeGoalTitle,onChange:e.writeGoalTitleHandler,className:t.join(" ")})),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlInput1"},o.a.createElement(B.a.Label,null,"Goal Image Link"),o.a.createElement(B.a.Control,{type:"text",placeholder:"https://example.png",value:e.writeLink,onChange:e.writeLinkHandler,className:t.join(" ")})),o.a.createElement(B.a.Group,{controlId:"exampleForm.ControlTextarea1"},o.a.createElement(B.a.Label,null,"Goal Description"),o.a.createElement(B.a.Control,{as:"textarea",placeholder:"Text Area",rows:"3",value:e.writeGoalDescription,onChange:e.writeGoalHandler,className:t.join(" ")}))),o.a.createElement(w.a,{variant:"success",type:"button",onClick:e.submitGoal,size:"sm"},"Add Goal"))},me=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,o=new Array(l),n=0;n<l;n++)o[n]=arguments[n];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",link:"",description:"",tempdata:[],isValidGoal:!0},a.titleEventHandler=function(e){a.setState({title:e.target.value,isValidGoal:!0})},a.linkEventHandler=function(e){a.setState({link:e.target.value,isValidGoal:!0})},a.descriptionEventHandler=function(e){a.setState({description:e.target.value,isValidGoal:!0})},a.postGoalDataHandler=function(){console.log("post data activate");var e={title:a.state.title,link:a.state.link,description:a.state.description};a.state.link&&a.state.title&&a.state.description?x.savedGoal(e).then((function(e){console.log("Data Saved"),console.log(e),a.setState({title:"",link:"",description:"",isValidGoal:!0})})):a.setState({isValidGoal:!1})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(_.a,{className:se.a.Back},o.a.createElement(f.a,null,o.a.createElement(k.a,null,o.a.createElement("h2",{className:se.a.title},"Create Your Life Goals"),o.a.createElement(ce,{writeGoalTitle:this.state.title,writeGoalTitleHandler:this.titleEventHandler,writeLink:this.state.link,writeLinkHandler:this.linkEventHandler,writeGoalDescription:this.state.description,writeGoalHandler:this.descriptionEventHandler,submitGoal:this.postGoalDataHandler,isValidGoals:this.state.isValidGoal})),o.a.createElement(k.a,null,o.a.createElement("div",{className:se.a.titleImage},o.a.createElement("img",{style:{width:"100%",height:"270px",margin:"1px"},src:"https://www.setaswall.com/wp-content/uploads/2017/03/Artistic-Landscape-4K-Wallpaper-3840x2160.jpg",alt:"sketch"}),o.a.createElement("div",{className:se.a.quotes},o.a.createElement("p",null,"Without plan nothing to achieve.......!"))))),o.a.createElement(f.a,null,o.a.createElement(k.a,null,o.a.createElement("div",{className:se.a.Temp},o.a.createElement("img",{style:{width:"100%",height:"250px",marginTop:"5px"},src:"https://quotefancy.com/media/wallpaper/3840x2160/1142003-Lee-Kuan-Yew-Quote-If-you-want-to-reach-your-goals-and-dreams-you.jpg",alt:"text"})))))}}]),t}(l.Component);var ue=function(){return o.a.createElement(i.a,null,o.a.createElement(S,null,o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/TimeToPlan/",component:re}),o.a.createElement(s.a,{exact:!0,path:"/create-story/",component:U}),o.a.createElement(s.a,{exact:!0,path:"/create-goals/",component:me}),o.a.createElement(s.a,{exact:!0,path:"/saved-list/",component:F}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},16:function(e,t,a){e.exports={createStoryInputForm:"CreateStory_createStoryInputForm__2DtYO",createStoryFormTitle:"CreateStory_createStoryFormTitle__9D-p_",createStoryContainerDiv:"CreateStory_createStoryContainerDiv__1GbBw",createStoryMainDiv:"CreateStory_createStoryMainDiv__wp9Sl",ImageDiv:"CreateStory_ImageDiv__3icpX",createStoryTitleDiv:"CreateStory_createStoryTitleDiv__24KHv",createStoryDescriptionDiv:"CreateStory_createStoryDescriptionDiv__1AKVa",createStoryEditButtonDiv:"CreateStory_createStoryEditButtonDiv__18BlY",createStoryEditButton:"CreateStory_createStoryEditButton__1nlC1",createStoryAuthor:"CreateStory_createStoryAuthor__3Kb_V",createStoryPhotoDiv:"CreateStory_createStoryPhotoDiv__6wLOH",createStoryPhoto:"CreateStory_createStoryPhoto__yj8x-"}},18:function(e,t,a){e.exports={mediaDiv:"mediaStory_mediaDiv__1FrfL",mediaDivOne:"mediaStory_mediaDivOne__3VET-",image:"mediaStory_image__3EJ2_",mediaOneHover:"mediaStory_mediaOneHover__1g7ZO",titleText:"mediaStory_titleText__1sfc6",textList:"mediaStory_textList__2LnY2",mediaDivTwo:"mediaStory_mediaDivTwo__1Hqk4",mediaTwoHover:"mediaStory_mediaTwoHover__3U8t4"}},21:function(e,t,a){e.exports={inputStoryForm:"inputStory_inputStoryForm__3Ogh2",StoryButton:"inputStory_StoryButton__1T_co",Input:"inputStory_Input__2kMfj",Label:"inputStory_Label__2oAng",InputElement:"inputStory_InputElement__3Z6tZ",Invalid:"inputStory_Invalid__1WVnY",editStoryForm:"inputStory_editStoryForm__2KhG5",modalButton:"inputStory_modalButton__AdviV"}},34:function(e,t,a){e.exports={InputElement:"inputGoals_InputElement__2jfKw",Invalid:"inputGoals_Invalid__1SEaa",modalButton:"inputGoals_modalButton__1FB4Y"}},37:function(e,t,a){e.exports={sketchDiv:"SketchBook_sketchDiv__3KUvi",sketchDivOne:"SketchBook_sketchDivOne__Ss0dK",image:"SketchBook_image__sz8TI",sketchOneHover:"SketchBook_sketchOneHover__m7QIF",titleText:"SketchBook_titleText__FHRDI",textList:"SketchBook_textList__3a7j-",sketchDivTwo:"SketchBook_sketchDivTwo__2A8iX"}},38:function(e,t,a){e.exports={Craouseltext:"Carousel_Craouseltext__2N4ZA",carouselMain:"Carousel_carouselMain__2X_7D"}},39:function(e,t,a){e.exports={Temp:"PlaningController_Temp__8ZSiH",container:"PlaningController_container__1kNW1",carousal:"PlaningController_carousal__32F1V",sectionTwo:"PlaningController_sectionTwo__3ea__",signUpButton:"PlaningController_signUpButton__1CbNQ"}},44:function(e,t,a){e.exports={Navbar:"Toolbar_Navbar__3GI8D",appContent:"Toolbar_appContent__1G7lP",appTitle:"Toolbar_appTitle__3o7hn"}},45:function(e,t,a){e.exports={footerDiv:"footer_footerDiv__2vbyu",footerSec1:"footer_footerSec1__3eQCX",footerAbout:"footer_footerAbout__2Nab6",footerInfo:"footer_footerInfo__YnG9a",footerSec2:"footer_footerSec2__2FINd"}},46:function(e,t,a){e.exports={title:"CreateGoals_title__1LrSi",titleImage:"CreateGoals_titleImage__Z-z5L",quotes:"CreateGoals_quotes__3aBWK"}},6:function(e,t,a){e.exports={title:"SavedList_title__1TMwd",goalAchievment:"SavedList_goalAchievment__3PP3d",Summary:"SavedList_Summary__2NV-R",Graph:"SavedList_Graph__3oWEI",editStoryMainDiv:"SavedList_editStoryMainDiv__9ZJyo",editStoryImageDiv:"SavedList_editStoryImageDiv__Szide",editStoryDescriptionDiv:"SavedList_editStoryDescriptionDiv__3qxUp",editStoryProfileDiv:"SavedList_editStoryProfileDiv__3H-Zp",editStoryTitle:"SavedList_editStoryTitle__DTOy8",editStoryAuthor:"SavedList_editStoryAuthor__3t34I",editStoryButton:"SavedList_editStoryButton__2tyZZ",editStoryDescription:"SavedList_editStoryDescription__1fFKu",PlansDetail:"SavedList_PlansDetail__1BvK1",Plans:"SavedList_Plans__oCg8-",Goal:"SavedList_Goal__3Ha17",GoalParentRow:"SavedList_GoalParentRow__-9bpx",GoalChildRow:"SavedList_GoalChildRow__N5B8d",GoalImage:"SavedList_GoalImage__ojHIA",GoalDescription:"SavedList_GoalDescription__3WbWz",GoalTittle:"SavedList_GoalTittle__29oRi",GoalButtons:"SavedList_GoalButtons__2zHJD",GoalParentRowDarkDiv:"SavedList_GoalParentRowDarkDiv__16lfj",GoalImageDarkDiv:"SavedList_GoalImageDarkDiv__V7sMZ"}},88:function(e,t,a){e.exports=a(145)},93:function(e,t,a){},95:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.694df1d8.chunk.js.map