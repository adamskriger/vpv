require 'pry'

def euler(num)
	total = 0
		(1...num).each do |i|
			if i%3 == 0 || i%5 ==0
			total += i

		end
	end

puts total

end

euler(1000)

binding.pry
