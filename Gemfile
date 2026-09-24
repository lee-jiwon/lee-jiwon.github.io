source "https://rubygems.org"

gem "jekyll", "~> 4.2.0"

group :jekyll_plugins do
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-seo-tag", "~> 2.8"
end

# `jekyll serve` needs webrick on Ruby 3.x; wdm is the Windows file watcher.
# The deploy workflow installs from Gemfile.lock, so keep it committed.
gem "webrick", "~> 1.8"
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
