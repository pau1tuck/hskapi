from django.contrib import admin
from .models import Vocabulary


class VocabularyAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['lesson_id']}),
        ('Chinese', {'fields':  ['simplified_chinese',
                                 'traditional_chinese', 'pinyin', 'pinnum', 'pinplain']}),
        ('English', {'fields':  ['english']}),
    ]
    list_display = ('lesson_id', 'simplified_chinese', 'pinyin', 'english')
    search_fields = (['lesson_id', 'simplified_chinese', 'english'])


admin.site.register(Vocabulary, VocabularyAdmin)
