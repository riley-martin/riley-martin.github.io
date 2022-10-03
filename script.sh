#!/bin/sh
install() {
  git clone https://github.com/andsens/homeshick.git ~/.homesick/repos/homeshick
  source ~/.homesick/repos/homeshick/homeshick.sh
}

install_dotfiles() {
  homeshick clone riley-martin/dotfiles
}

install
install_dotfiles
homeshick link dotfiles
