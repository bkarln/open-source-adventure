class Management{verifyLoad(){window.addEventListener("load",this.build(),{once:!0})}build(){console.log("loaded"),window.theme.build()}}class Theme{build(){console.log("theme build")}}window.management=new Management,window.theme=new Theme,management.verifyLoad();