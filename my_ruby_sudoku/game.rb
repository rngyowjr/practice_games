require_relative "board"

class Game
  def self.from_file(filename)
    board = Board.from_file(filename)
    self.new(board)
  end

  def initialize(board)
    @board = board
  end

  def ask_pos
    pos = nil
    until pos && valid_pos?(pos)
      puts "Please enter a position on the board (EX: 2,4)"
      print "> "
      pos = parse_pos(gets.chomp)
    end
    pos
  end

  def valid_pos?(pos)
    pos.is_a?(Array) &&
      pos.length == 2 &&
      pos.all? {|x| x.between?(0, board.size - 1)}
  end
end