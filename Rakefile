# frozen_string_literal: true

require 'erb'

task :default do
    erb = ERB.new(File.read('index.erb'))
    @images = []
    @images_count = 0

    if FileTest.directory?('images')
        @images = Dir.entries('images').select { |f| f =~ /.*\.(jpg|jpeg|png|gif)$/ }
        @images_count = @images.size
    end

    File.write('index.html', erb.result)
end

task :clean do
    File.delete('index.html') if FileTest.file?('index.html')
    if FileTest.directory?('dist')
        Dir.entries('dist').select { |f| f =~ /.*\.(jpg|jpeg|png|gif|ico|css|map|js|html)$/ }.each do |f|
            File.delete("dist/#{f}")
        end
    end
end
