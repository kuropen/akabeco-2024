# frozen_string_literal: true

require 'erb'

task :default do
    erb = ERB.new(File.read('index.erb'))
    @images = []

    if FileTest.directory?('images')
        @images = Dir.entries('images').select { |f| f =~ /.*\.(jpg|jpeg|png|gif)$/ }
        @images_count = @images.size
    end

    File.write('index.html', erb.result)
end
