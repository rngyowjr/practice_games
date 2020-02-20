require_relative "game"

new_game = Game.from_file("puzzles/sudoku1_almost.txt")

new_game.run