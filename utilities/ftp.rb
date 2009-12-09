require 'rubygems'
require 'net/ftp'
require 'yaml'

def load_file file
  file = File.read(file)
  file = YAML::Load(file)
  return file
end
