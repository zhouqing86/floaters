# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)
require 'rspec/core/rake_task'

Rails.application.load_tasks

task(:spec).clear
RSpec::Core::RakeTask.new(:spec) do |t|
  t.rspec_opts = "--exclude-pattern spec/features/*_spec.rb"
end

# task :default => :spec
