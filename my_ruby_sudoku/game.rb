require_relative "board"

class Game
  attr_reader :board
  
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
      puts "Enter a position on the board (EX: 2,4)"
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

  def parse_pos(str)
    str.split(",").map {|char| Integer(char)}
  end

  def ask_val
    val = nil
    until val && valid_val?(val)
      puts "Enter a value between 1 and 9 (0 to reset the tile)"
      print "> "
      val = parse_val(gets.chomp)
    end
    val
  end

  def valid_val?(val)
    val.is_a?(Integer) &&
      val.between?(0, 9)
  end

  def parse_val(str)
    Integer(str)
  end
end